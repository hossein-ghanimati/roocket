import { memo } from "react";
import { OverlayContextProvider } from "./assets/contexts/site/overlay.context";
import Overlay from "./assets/components/site/share/modals/Overlay";
import Router from "./Router";
import { AuthContextProvider } from "./assets/contexts/share/auth.context";
import { MobileMenuContextProvider } from "./assets/contexts/site/mobileMenu.context";
import {
  MILLISECONDS_IN_MINUTE,
  sortByLast,
} from "./assets/ts/utils/calculation";
import { QueryClient, QueryClientProvider } from "react-query";
import { WithCreatedAt } from "./assets/types/share/withCreatedAt.type";
import { Provider } from "./provider";

const AppContent = memo(() => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * MILLISECONDS_IN_MINUTE,
        keepPreviousData: true,
        select: (queryData) => {
          const data: [WithCreatedAt] = queryData as [WithCreatedAt];
          return sortByLast(data);
        },
      },
    },
  });

  return (
    <div
      id="app"
      className="bg-custom-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 min-h-screen overflow-x-hidden"
    >
      <Provider>
        <OverlayContextProvider>
          <Overlay />

          <QueryClientProvider client={client}>
            <AuthContextProvider>
              <MobileMenuContextProvider>
                <Router />
              </MobileMenuContextProvider>
            </AuthContextProvider>
          </QueryClientProvider>
        </OverlayContextProvider>
      </Provider>
    </div>
  );
});

export default AppContent;
