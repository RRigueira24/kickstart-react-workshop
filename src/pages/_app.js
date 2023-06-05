import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Layout } from "@components/organisms";

import { globalStyles } from "@theme/global";

const App = ({ Component, pageProps }) => {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <>
      {typeof window !== "undefined" && <Global styles={globalStyles} />}
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export default App;
