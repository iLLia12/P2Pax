import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const defaultState = () => ({
  payableRewordsTable: [],
  tableData: [
    {
      number: 1,
      registration_type: "Direct invite (link)",
      number_of_referrals: 0,
      invited_by_me: 0,
      invited_by_referrals: 0,
    },
    {
      number: 1,
      registration_type: "Direct invite (link)",
      number_of_referrals: 0,
      invited_by_me: 0,
      invited_by_referrals: 0,
    },
    {
      number: 1,
      registration_type: "Direct invite (link)",
      number_of_referrals: 0,
      invited_by_me: 0,
      invited_by_referrals: 0,
    },
    {
      number: 1,
      registration_type: "Direct invite (link)",
      number_of_referrals: 0,
      invited_by_me: 0,
      invited_by_referrals: 0,
    },
    {
      number: 1,
      registration_type: "Direct invite (link)",
      number_of_referrals: 0,
      invited_by_me: 0,
      invited_by_referrals: 0,
    },
    {
      number: 1,
      registration_type: "Direct invite (link)",
      number_of_referrals: 0,
      invited_by_me: 0,
      invited_by_referrals: 0,
    },
  ],
  myReferrals: [
    {
      number: "1",
      date: "2016-05-02",
      introducer: "Tom",
      username: "Tom",
      level: "12",
      email: "test@test.com",
      source: "Grove",
      status: "active",
      total_invites: "22",
    },
    {
      number: "1",
      date: "2016-05-02",
      introducer: "Tom",
      username: "Tom",
      level: "12",
      email: "test@test.com",
      source: "Grove",
      status: "active",
      total_invites: "22",
    },
    {
      number: "1",
      date: "2016-05-02",
      introducer: "Tom",
      username: "Tom",
      level: "12",
      email: "test@test.com",
      source: "Grove",
      status: "active",
      total_invites: "22",
    },
    {
      number: "1",
      date: "2016-05-02",
      introducer: "Tom",
      username: "Tom",
      level: "12",
      email: "test@test.com",
      source: "Grove",
      status: "active",
      total_invites: "22",
    },
    {
      number: "1",
      date: "2016-05-02",
      introducer: "Tom",
      username: "Tom",
      level: "12",
      email: "test@test.com",
      source: "Grove",
      status: "active",
      total_invites: "22",
    },
  ],
  friends: {
    activeTab: "Dashboard",
  },
});

const inBrowser = typeof window !== "undefined";
// if in browser, use pre-fetched state injected by SSR
const state =
  inBrowser && window.__INITIAL_STATE__
    ? window.__INITIAL_STATE__.page
    : defaultState;

export default {
  state,
  actions,
  mutations,
  getters,
};
