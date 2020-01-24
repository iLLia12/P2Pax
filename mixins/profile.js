import { mapActions } from 'vuex';

export default {

    data:() => ({
        payableRewordsTable:[],
        referralDataTable:[
            {
                number:1, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
            },
            {
                number:3, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
            },{
                number:1, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
            },{
                number:1, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
            },
            {
                number:4, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
            },
            {
                number:1, registration_type: "Direct invite (link)", number_of_referrals:0, invited_by_me:0, invited_by_referrals:0
            },
        ],
        myReferrals: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
        }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
        }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
        }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
        }],
        friends:{
            activeTab:"Dashboard"
        }
    }),

    computed: {
        referralDataTable() {
            return this.$store.state.profile.referralDataTable
        },
        payableRewordsTable() {
            return this.$store.state.profile.payableRewordsTable
        },
        friendsActiveTab() {
            return this.$store.state.profile.friends.activeTab
        },
        myReferralsDataTable() {
            return this.$store.state.profile.myReferrals
        }
    },

    methods: {
        ...mapActions({
            setFriendsActiveTab: 'profile/setFriendsActiveTab',
        })
    }
}
