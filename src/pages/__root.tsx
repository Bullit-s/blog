import { MantineProvider } from '@mantine/core';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AppLayout } from '@/shared/layouts/AppLayout';

export const Route = createRootRouteWithContext()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <MantineProvider defaultColorScheme="dark" classNamesPrefix="ui">
      <AppLayout>
        <Outlet key="Outlet" />
        <TanStackRouterDevtools position="bottom-right" />
      </AppLayout>
    </MantineProvider>
  );
}
