import TabBar from '@/src/ui/TabBar'
import { Tabs } from 'expo-router'

export default function Layout() {
    return (
        <Tabs tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen
                name='index'
                options={{
                    headerShown: false,
                    animation: "shift",
                }}
            />
            <Tabs.Screen
                name='clients'
                options={{
                    headerShown: false,
                    animation: "shift"
                }}
            />
            <Tabs.Screen
                name='todos'
                options={{
                    headerShown: false,
                    animation: "shift"
                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    headerShown: false,
                    animation: "shift"
                }}
            />
        </Tabs>
    )
}