import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";

const HomePage = async () => {
  const open = await prisma.issue.count({where: {status: 'OPEN'}})
  const inProgress = await prisma.issue.count({where: {status: 'IN_PROGRESS'}})
  const closed = await prisma.issue.count({where: {status: 'CLOSED'}})
  return <IssueSummary open={open} inProgress={inProgress} closed={closed}/>;
};

export default HomePage;
