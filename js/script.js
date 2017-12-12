var app = new Vue({
    el: '#app',
    data: {
        homeP: true,
        connectP: false,
        bindingsP: false,
        securityP: false,
        pcCount: 2,
        sslState: 'disabled',
        selectList: [
            {
                name: 'Dell 123',
                ip: '192.168.1.10'
            },
            {
                name: 'HP 321',
                ip: '192.168.1.11'
            }
        ],
        bindingList: [
            {
                action: 'Copy',
                binding: 'Ctrl + C'
            },
            {
                action: 'Paste',
                binding: 'Ctrl + V'
            }
        ]
    },
    methods: {
        homeClick: function () {
            this.homeP = true;
            this.connectP = false;
            this.bindingsP = false;
            this.securityP = false;
        },
        connectClick: function () {
            this.homeP = false;
            this.connectP = true;
            this.bindingsP = false;
            this.securityP = false;
        },
        bindingsClick: function () {
            this.homeP = false;
            this.connectP = false;
            this.bindingsP = true;
            this.securityP = false;
        },
        securityClick: function () {
            this.homeP = false;
            this.connectP = false;
            this.bindingsP = false;
            this.securityP = true;
        },
        toggleSSL: function () {
            if (this.sslState == 'disabled') {
                this.sslState = 'enabled';
            } else {
                this.sslState = 'disabled';
            }
        }
    }
})
