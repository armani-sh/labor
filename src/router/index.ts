import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("/src/views/login.vue"),
  },
  {
    path: "/admin",
    component: () => import("/src/views/admin.vue"),
    children: [
      {
        path: "/AddLab",
        component: () => import("/src/components/AddLab.vue"),
      },
      {
        path: "/AddLab1",
        component: () => import("/src/components/AddLab1.vue"),
      },
      {
        path: "/AddLab3",
        component: () => import("/src/components/AddLab3.vue"),
      },
      {
        path: "/GetLab",
        component: () => import("/src/components/GetLab.vue"),
      },
      {
        path: "/TeacherInform",
        component: () => import("/src/components/TeacherInform.vue"),
      },
    ],
  },
  {
    path: "/teacher",
    component: () => import("/src/views/teacher.vue"),
    children: [
      {
        path: "/AddCourse",
        component: () => import("/src/components/AddCourse.vue"),
      },
      {
        path: "/AddCourse1",
        component: () => import("/src/components/AddCourse1.vue"),
      },
      {
        path: "/AddCourse3",
        component: () => import("/src/components/AddCourse3.vue"),
      },
      {
        path: "/GetCourse",
        component: () => import("/src/components/GetCourse.vue"),
      },
      {
        path: "/SelectCourse",
        component: () => import("/src/components/SelectCourse.vue"),
      },
      {
        path: "/toSucess",
        component: () => import("/src/components/Sucess.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
