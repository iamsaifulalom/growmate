import TabBar from '@/src/ui/TabBar'
import { Tabs } from 'expo-router'

export default function Layout() {
    return (
        <Tabs tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen
                name='index'
                options={tabOptions}
            />
            <Tabs.Screen
                name='clients'
                options={tabOptions}
            />
            <Tabs.Screen
                name='todos'
                options={tabOptions}
            />
            <Tabs.Screen
                name='settings'
                options={tabOptions}
            />
        </Tabs>
    )
}

const tabOptions = {
    headerShown: false,
}
