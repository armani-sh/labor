import { createStore, MutationTree } from "vuex";
import { Form, mat, Course } from "@/views/Datasource/datasource";
import * as vxt from "./VuexTypes";

export interface State {
  labs: Form[];
  cous: Course[];
  configc: Course;
  configl: Form;
  labkey: number;
  couskey: number;
}

const LabList: Form[] = [
  {
    key: 1111,
    take: 8,
    name: "901",
    macnum: 22,
    date1: "10",
    date2: "22",
    opened: true,
    type: [{ kinds: "C / C++" } as mat],
    singdoub: "single",
    configuration: "i9,RTX3060,1TB,4GB",
    dis: [3, 4, 8, 19, 12, 16, 27, 33],
  },
  {
    key: 1112,
    take: 8,
    name: "902",
    macnum: 65,
    date1: "10",
    date2: "22",
    opened: true,
    type: [{ kinds: "Java" } as mat],
    singdoub: "double",
    configuration: "i7,GTX1060,512GB,8GB",
    dis: [1, 6, 20, 26, 39, 51, 69, 61],
  },
  {
    key: 1113,
    take: 0,
    name: "906",
    macnum: 41,
    date1: "10",
    date2: "22",
    opened: true,
    type: [{ kinds: "Java" } as mat],
    singdoub: "double",
    configuration: "i5,GTX1050,512GB,4GB",
    dis: [],
  },
  {
    key: 1114,
    take: 0,
    name: "912",
    macnum: 56,
    date1: "10",
    date2: "22",
    opened: true,
    type: [{ kinds: "Java" } as mat],
    singdoub: "double",
    configuration: "i5,GTX750,215GB,2GB",
    dis: [],
  },
];

const CouList: Course[] = [
  {
    key: 111111,
    name: "计算机操作系统",
    stunum: 20,
    totaltime: 15,
    date1: "10",
    date2: "22",
    type: "必修课",
    describe: "考试课",
    sellect: [11110003, 11110004, 11110008, 11110019],
  },
  {
    key: 111112,
    name: "计算机网络",
    stunum: 20,
    totaltime: 15,
    date1: "10",
    date2: "22",
    type: "必修课",
    describe: "考试课",
    sellect: [11110012, 11110016, 11110027, 11110033],
  },
  {
    key: 111113,
    name: "WEB框架",
    stunum: 50,
    totaltime: 15,
    date1: "10",
    date2: "22",
    type: "选修课",
    describe: "考试课",
    sellect: [11140001, 11140006, 11140020, 11140026],
  },
  {
    key: 111114,
    name: "软件体系结构",
    stunum: 31,
    totaltime: 15,
    date1: "10",
    date2: "22",
    type: "必修课",
    describe: "考试课",
    sellect: [11120039, 11120051, 11120069, 11120061],
  },
];

const figc: Course = {
  key: 111111,
  name: "计算",
  stunum: 20,
  totaltime: 15,
  date1: "10",
  date2: "22",
  type: "必修课",
  describe: "考试课",
  sellect: [3, 4, 8, 19],
};

const figl: Form = {
  key: 1111,
  take: 0,
  name: "901",
  macnum: 20,
  date1: "10",
  date2: "22",
  opened: true,
  type: [{ kinds: "C / C++" } as mat],
  singdoub: "single",
  configuration: "i9,RTX3060,1TB,4GB",
  dis: [3, 4, 8, 19, 12, 16, 27, 33],
};

const myState: State = {
  labs: LabList,
  cous: CouList,
  configc: figc,
  configl: figl,
  labkey: 1114,
  couskey: 11114,
};

const myMutations: MutationTree<State> = {
  [vxt.UPDATE_LABLIST]: (state, data: Form) => state.labs.push(data),
  [vxt.UPDATE_COULIST]: (state, data: Course) => state.cous.push(data),
  [vxt.UPDATE_SELLECT]: (state, data: number[]) => {
    for (let i = 0; i < state.cous.length; i++) {
      if (state.cous[i].key == myState.configc.key) {
        state.cous[i].sellect = data;
        console.log("c");
        console.log(data);
        break;
      }
    }
  },
  [vxt.UPDATE_DIS]: (state, data: number[]) => {
    for (let i = 0; i < state.labs.length; i++) {
      if (state.labs[i].key == myState.configl.key) {
        state.labs[i].dis = data;
        state.labs[i].take = data.length;
        console.log("l");
        console.log(data);
        break;
      }
    }
  },
  [vxt.TRANSPLANT_COU]: (state, data: Course) => {
    state.configc = data;
  },
  [vxt.TRANSPLANT_LAB]: (state, data: Form) => {
    state.configl = data;
  },
  [vxt.UPDATE_LABKEY]: (state, data: number) => {
    state.labkey = data;
  },
  [vxt.UPDATE_COUSKEY]: (state, data: number) => {
    state.couskey = data;
  },
};

export default createStore({
  state: myState,
  mutations: myMutations,
  actions: {},
  modules: {},
});
