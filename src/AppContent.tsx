import { memo } from "react";
import { OverlayContextProvider } from "./assets/contexts/site/overlay.context";
import Overlay from "./assets/components/site/share/modals/Overlay";
import Router from "./Router";
import { AuthContextProvider } from "./assets/contexts/share/auth.context";
import { MobileMenuContextProvider } from "./assets/contexts/site/mobileMenu.context";
import { MILLISECONDS_IN_MINUTE, sortByLast } from "./assets/ts/utils/calculation";
import { QueryClient, QueryClientProvider } from "react-query";
import { WithCreatedAt } from "./assets/types/share/withCreatedAt.type";

const AppContent = memo(() => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * MILLISECONDS_IN_MINUTE,
        keepPreviousData: true,
        select: (queryData ) => {
          const data: [WithCreatedAt] = queryData as [WithCreatedAt];
          return sortByLast(data);
        }
      },
    },
  });

  return (
    <div
      id="app"
      className="font-iranyekanBakh overflow-x-hidden bg-custom-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 font-shabnam font-normal text-base select-none min-h-screen"
    >
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
    </div>
  );
});

export default AppContent;
