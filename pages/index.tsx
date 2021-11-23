import type { NextPage } from "next";
import { GetStaticProps } from "next";
import RoomsList, { RoomForList } from "../components/RoomsList";
import companiesData from "../data/companies";
import { Company, ContactInfo, Franchise, Room } from "../lib/model/Company";
import { WithId } from "../lib/model/Utitls";

type PropsType = {
  rooms: RoomForList[];
};

const Home: NextPage<PropsType> = ({ rooms }: PropsType) => {
  return (
    <main className="container">
      <RoomsList rooms={rooms} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const rooms: RoomForList[] = [];

  Object.entries(companiesData).map(([cKey, company]: [string, Company]) => {
    Object.entries(company.franchises).map(([fKey, franchise]: [string, Franchise]) => {
      Object.entries(franchise.rooms).map(([rKey, room]: [string, Room]) => {
        rooms.push({
          ...room,
          id: rKey,
          companyLogo: company.logo,
          contact: franchise.contact,
          franchiseName: franchise.name,
        });
      });
    });
  });

  return {
    props: {
      rooms,
    },
  };
};

export default Home;
