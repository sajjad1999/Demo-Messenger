import uuid from 'uuid'
import moment from 'moment'

export const defaultProfile = {
    userName: 'You',
    pass: '',
    id: uuid(),
    pvChats:[]
}

export const defaultUsers = [
    {
        name: 'mohammad',
        id: uuid(),
        // chats: [
        //     {
        //         partnerId: profile.id,
        //         messages: [
        //             {
        //                 text: 'bla bla bla An airplane or aeroplane bla bla bla An airplane or aeroplane bla bla bla An airplane or aeroplane (informally plane) is a powered An airplane or aeroplane (informally plane) is a powered',
        //                 author: 'mohammad',
        //                 id: uuid(),
        //                 date: moment('2009 10 5')
        //             },
        //             {
        //                 text: 'bla An airplane or aeroplane (informally plane) is a powered An airplane or aeroplane (informally plane) is a powered',
        //                 author: 'You',
        //                 id: uuid(),
        //                 date: moment('2010 12 5')
        //             }
        //         ]
        //     }
        // ],
        pvChats: [
            {
                text: 'bla bla bla An airplane or aeroplane bla bla bla An airplane or aeroplane bla bla bla An airplane or aeroplane (informally plane) is a powered An airplane or aeroplane (informally plane) is a powered',
                author: 'mohammad',
                id: uuid(),
                date: moment('2009 10 5')
            },
            {
                text: 'bla An airplane or aeroplane (informally plane) is a powered An airplane or aeroplane (informally plane) is a powered',
                author: 'You',
                id: uuid(),
                date: moment('2010 12 5')
            }
        ]
    },
    {
        name: 'alireza sharifi',
        id: uuid(),
        pvChats: [
            {
                text: 'i am alireza',
                author: 'alireza sharifi',
                id: uuid(),
                date: moment('2015 11 5')
            }
        ]
    },
    {
        name: 'ali rahmani',
        id: uuid(),
        pvChats: [
            {
                text: ' transports more than four billion passengers annually on airliners[1] and transports more than 200 billion tonne-kilometres[2] of cargo annually, which is less than 1% of the worlds cargo movement.[3] Most airplanes are flown by a pilot on board the aircraft, but some are designed to be remotely or computer-controlled such as drones.',
                author: 'ali rahimi',
                id: uuid(),
                date: moment('2015 11 5')
            },{
                text: ' military, and research. Worldwide, commercial aviation transports more than four billion passengers annually on airliners[1] and transports more than 200 billion tonne-kilometres[2] of cargo annually, which is less than 1% of the worlds cargo movement.[3] Most airplanes are flown by a pilot on board the aircraft, but some are designed to be remotely or computer-controlled such as drones.',
                author: 'You',
                id: uuid(),
                date: moment('2015 11 8')
            }
        ]
    },
    {
        name: 'fateme',
        id: uuid(),
        pvChats: []
    },
    {
        name: 'mahdi',
        id: uuid(),
        pvChats: []
    },
    {
        name: 'javad',
        id: uuid(),
        pvChats: []
    },
    {
        name: 'mohammad',
        id: uuid(),
        pvChats: []
    },
    {
        name: 'alireza',
        id: uuid(),
        pvChats: []
    },
    {
        name: 'mohammad',
        id: uuid(),
        pvChats: []
    },
    {
        name: 'alireza',
        id: uuid(),
        pvChats: []
    },
    {
        name: 'mehdi',
        id: uuid(),
        pvChats: []
    },
    {
        name: 'alireza22',
        id: uuid(),
        pvChats: []
    }
]

export const defaultGroupChat = [
    {
        text: 'hey guys, whats up ?',
        id: uuid(),
        authorId: defaultUsers[0].id,
        authorName: defaultUsers[0].name,
        date: moment('2019 5 2')
    },
    {
        text: 'bla bla bla bla',
        id: uuid(),
        authorId: defaultUsers[1].id,
        authorName: defaultUsers[1].name,
        date: moment('2019 5 3')
    },
    {
        text: 'hey !!!!!!!',
        id: uuid(),
        authorId: defaultUsers[2].id,
        authorName: defaultUsers[2].name,
        date: moment('2018 5 7')
    }

]