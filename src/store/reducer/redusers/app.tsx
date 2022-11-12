import types from "../../../type";

const initialStore = {
  title: "JOURNALIST WORKSPACE",
};

const app = (state = initialStore, action: any) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default app;
