import DreamsProvider from "../modules/dreams/hooks/dreams";

interface IAppProvider {
  children: JSX.Element;
}

export default function AppProvider({ children }: IAppProvider) {
  return <DreamsProvider>{children}</DreamsProvider>;
}
