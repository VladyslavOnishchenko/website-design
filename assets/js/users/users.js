import {fetchData} from './users-fetch.js';

const protocol = 'http://'
const host = "194.61.53.73";
const urlBase = `${protocol}${host}/api`;
const urlMethod = "/users";
const url = urlBase + urlMethod;


async function getUsers(method = 'GET', body = null, withPaginate = false, page = 1) {

    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
        }
        if (method === 'POST') {
            options.body = JSON.stringify(body);
        }

        const users = await fetchData(url, options);

        if (withPaginate) {
            const users = await fetchData(`${url}?page=${page}`, options);
        }

        if (!users.ok) {
            throw new Error(`${method} ${urlMethod} ${url} not found`);
        }
        if (!users?.users?.data.length) {
            return [];
        }


        if (withPaginate) {
            return [
                {
                    lastPage: users.users.last_page,
                    total: users.users.total,
                    users:users.users.data
                }
            ]
        }

        return users.users.data;

    } catch (err) {
        console.error(err);
    }

}


function renderUsers(data = []) {
    const users = document.getElementById("users__list");
    if (!users) return;

    users.className = "users__list grid w-full grid-cols-1 gap-5 py-8 text-left sm:grid-cols-2 lg:grid-cols-3";
    users.replaceChildren();

    if (!data.length) {
        const empty = document.createElement("p");
        empty.className = "col-span-full rounded-2xl border border-dashed border-zinc-700 p-10 text-center text-zinc-400";
        empty.textContent = "No users yet";
        users.appendChild(empty);
        return;
    }


    data.forEach(({avatar, email, id, name, status}) => {
        const user = document.createElement("div");
        user.id = id;
        user.className = "min-w-0 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl";
        const isActive = status === "active";

        user.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="avatar relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-amber-400/10 text-xl font-bold text-amber-300"></div>
                <div class="min-w-0">
                    <h2 class="name truncate text-lg font-semibold text-white"></h2>
                    <p class="email mt-1 truncate text-sm text-zinc-400"></p>
                </div>
            </div>
            <div class="mt-6 flex items-center justify-between gap-3 border-t border-zinc-800 pt-4">
                <span class="id text-xs font-medium tracking-wide text-zinc-500"></span>
                <span class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${isActive ? "bg-emerald-400/10 text-emerald-300" : "bg-zinc-800 text-zinc-300"}">
                    <span class="size-1.5 shrink-0 rounded-full ${isActive ? "bg-emerald-400" : "bg-zinc-500"}"></span>
                    <span class="status"></span>
                </span>
            </div>`;

        user.querySelector(".name").textContent = name || "Unnamed user";
        user.querySelector(".email").textContent = email || "No email";
        user.querySelector(".id").textContent = `ID: ${id}`;
        user.querySelector(".status").textContent = status || "Unknown";

        const avatarBox = user.querySelector(".avatar");
        avatarBox.textContent = (name || "?").trim().charAt(0).toUpperCase();

        if (avatar?.path) {
            const image = document.createElement("img");
            image.src = `${protocol}${host}/storage/${avatar.path}`;
            image.alt = name || "User avatar";
            image.loading = "lazy";
            image.className = "absolute inset-0 h-full w-full object-cover";
            image.onerror = () => image.remove();
            avatarBox.appendChild(image);
        }

        users.appendChild(user);
    });
}


function renderUserPaginate(data = [], currentPage = 1) {
    const pagination = document.getElementById("users__pagination");
    if (!pagination) return;

    pagination.replaceChildren();
    pagination.className = "pagination flex w-full flex-wrap items-center justify-center gap-2 py-8";
    pagination.setAttribute("role", "navigation");
    pagination.setAttribute("aria-label", "Pagination");

    if (!data.length) return;

    data.forEach(({lastPage}) => {
        for (let i = 1; i <= lastPage; i++) {
            const isActive = i === Number(currentPage);
            const paginationItem = document.createElement("button");
            paginationItem.type = "button";
            paginationItem.className = "pagination-item inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-xl border px-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 " + (
                isActive
                    ? "border-amber-400 bg-amber-400 text-zinc-950 shadow-md shadow-amber-400/20"
                    : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:-translate-y-0.5 hover:border-amber-400/50 hover:bg-zinc-800 hover:text-white"
            );
            paginationItem.setAttribute("data-page", i);
            paginationItem.setAttribute("aria-label", "Page " + i);
            paginationItem.textContent = i;

            if (isActive) {
                paginationItem.setAttribute("aria-current", "page");
            }

            pagination.appendChild(paginationItem);
        }
    });

    const paginationItems = document.querySelectorAll(".pagination-item");

    if (!paginationItems) return;

    paginationItems.forEach((item) => {
        item.addEventListener("click", async (e) => {
            const page = e.target.getAttribute("data-page");
            const users = await getUsers('POST', page, false)
            renderUsers(users);
        })
    })
}

document.addEventListener("DOMContentLoaded", async () => {
    const users = await getUsers('GET', null, false)
    const paginationData = await getUsers('GET', null, true)

    if (users.length || paginationData.length) {
        renderUsers(users);
        renderUserPaginate(paginationData)
    }

})