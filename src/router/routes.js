import routeNames from "./routeNames";
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        redirect: { name: routeNames.HOME_MODULE },
      },
      {
        path: "front-desk",
        name: routeNames.HOME_MODULE,
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "doctor",
        name: routeNames.DOCTOR_MODULE,
        component: () => import("pages/DoctorPage.vue"),
      },
      {
        path: "nurse",
        name: routeNames.NURSE_MODULE,
        component: () => import("pages/NursePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
