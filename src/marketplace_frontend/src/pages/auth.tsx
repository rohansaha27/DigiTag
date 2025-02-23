import { AuthClient } from "@dfinity/auth-client";

export const initAuth = async () => {
    const authClient = await AuthClient.create();

    if (await authClient.isAuthenticated()) {
        handleAuthenticated(authClient);
    } else {
        await authClient.login({
            identityProvider: "https://identity.ic0.app/#authorize",
            onSuccess: () => handleAuthenticated(authClient),
        });
    }
};

const handleAuthenticated = (authClient: AuthClient) => {
    const identity = authClient.getIdentity();
    console.log("Authenticated with identity:", identity.getPrincipal().toText());
    // Add your logic to handle authenticated state
};