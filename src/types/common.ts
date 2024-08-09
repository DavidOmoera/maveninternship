import store from "store";

export type TSVGProps = Partial<{
  color: string;
  fillColor?: string;
}> &
  React.SVGProps<SVGSVGElement>;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
