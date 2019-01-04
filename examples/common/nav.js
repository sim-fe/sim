export default {
    开发指南: [
        {
            name: 'giud',
            path: '/giud',
            desc: '介绍'
        },
        {
            name: 'install',
            path: '/install',
            desc: '安装'
        },
        {
            name: 'start',
            path: '/start',
            desc: '快速开始'
        },
        {
            name: 'logs',
            path: '/logs',
            desc: '更新日志'
        }
    ],
    组件: [
        {
            desc: '基础组件',
            path: '/component',
            items: [
                {
                    desc: 'Icon 图标',
                    name: 'icon',
                    path: '/icon',
                    type: 'pages'
                },
                // {
                //   "desc": "color 颜色",
                //   "name": "color",
                //   "path": "/color"
                // },
                {
                    desc: 'Button 按钮',
                    name: 'button',
                    path: '/button'
                },
                {
                    desc: 'Tag 标签',
                    name: 'tag',
                    path: '/tag'
                }
            ]
        },
        {
            desc: '视图组件',
            path: '/component',
            items: [
                {
                    desc: 'Layout 布局',
                    name: 'layout',
                    path: '/layout'
                },
                {
                    desc: 'Modal 对话框',
                    name: 'modal',
                    path: '/modal'
                }
            ]
        },
        {
            desc: '表单组件',
            path: '/component',
            items: [
                {
                    desc: 'input 输入框',
                    name: 'input',
                    path: '/input'
                },
                {
                    desc: 'select 选择器',
                    name: 'select',
                    path: '/select'
                }
            ]
        }
    ]
}
