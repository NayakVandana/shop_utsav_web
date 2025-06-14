
import { useNotificationsStore } from "@/ui/company/Notifications/notificationsStore";
import Echo from "laravel-echo";
import { getSession } from "next-auth/react";
import Pusher from "pusher-js";
import toast from "./toast";
// import io from "socket.io-client";
export async function initNotification() {
    try {
        window.Pusher = Pusher;
        // Assuming Pusher
        window.Echo = new Echo({
            broadcaster: 'pusher',
            key: process.env.PUSHER_APP_KEY,
            cluster: process.env.PUSHER_APP_CLUSTER,
            forceTLS: true,
            transports: ['websocket']
        });

        const state = await getSession({
            req: false
        });
        const user: any = state?.user;

        // console.log('App.Message.' + user?.id);
        var channel = window.Echo.channel('App.Message.' + user?.repute_id);

        channel.listenToAll(function (event, data) {

            if (data?.notification_text) {
                toast({ message: data?.notification_text, status: 'info' });
                const { getUnreadCounts, lastFetched, getNotifications } = useNotificationsStore.getState();
                setTimeout(() => {
                    getUnreadCounts();
                    console.log('lastFetched', lastFetched);
                    if(lastFetched) {
                        getNotifications(lastFetched, {
                            success: () => {},
                            error: () => {}
                        })
                    }
                },2500)
            }
            // toast({ message: data.notification_text, status: 'info' });
        });

        // window.io = require('socket.io-client');
        // const state = await getSession({
        //     // req: false
        // });
        // const user: any = state?.user;

        // if (window.io != undefined) {

        //     // Assuming Pusher
        //     window.Echo = new Echo({
        //         broadcaster: 'socket.io',
        //         host: window.location.hostname + ':6002',
        //         // client: io,
        //         transports: ['websocket']
        //     });

        //     console.log('App.Message.' + user.id);

        //     // window.Echo.private('App.Message.' + user.id)

        //     //     .listen('SendNotification', (e) => {
        //     //         console.log(e);
        //     //         toast({ message: e.message, type: 'info' })
        //     //     });

        //     var channel = Echo.channel('App.Message.' + user.id);
        //     channel.listen('SendNotification', function (data) {
        //         alert(JSON.stringify(data));
        //     });



        // }

    } catch (e) {
        console.error(e);
    }
}