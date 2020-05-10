import ReactGA from "react-ga";

//initialize google analytics
export const initGA = () => {
    ReactGA.initialize(
        [
            {
                trackingId: "UA-166003117-1",
                gaOptions: {
                    name: "masterBranch"
                }
            }
        ],
        { debug: false, alwaysSendToDefaultTracker: false }
    );
};
