import { getEductationInfo } from "../utils/apiCalls"
export default function Home() {
  return (
    <>
    <div>Project Setup</div>
    </>
  )
}
export async function getServerSideProps(context) {
  const getEductationInfo1 = await getEductationInfo();
  console.log("getEductationInfogetEductationInfo",getEductationInfo1)
  return {
    props: {},
  }
}