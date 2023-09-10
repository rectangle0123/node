import AppBase from "../components/AppBase";
import ErrorContent from "../components/ErrorContent";

// 404エラーページ画面
export default function Error404() {
  return (
    <AppBase>
      <ErrorContent status={404} message="Not Found" explain="This page could not be found." />
    </AppBase>
  );
}