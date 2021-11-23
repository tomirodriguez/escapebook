import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SocialMedia } from "../../lib/model/Company";
import Link from "../Link";
import styles from "./SocialMediaLinks.module.scss";

type PropsType = {
  links: SocialMedia & { website: string };
};

const iconData: { [id: string]: { icon: IconProp; color: string } } = {
  website: { icon: faGlobe, color: "#808080" },
  facebook: { icon: faFacebook, color: "#4267B2" },
  instagram: { icon: faInstagram, color: "#e95950" },
  youtube: { icon: faYoutube, color: "#FF0000" },
  twitter: { icon: faTwitter, color: "#00acee" },
};

export default function SocialMediaLinks({ links }: PropsType) {
  return (
    <ul className={`d-flex ai-center jc-end ${styles.social}`}>
      {Object.keys(links).map((id) => {
        if (iconData[id] === undefined) return null;
        const { icon, color } = iconData[id];

        return (
          <li key={id}>
            <Link href={links[id]}>
              <div className={`clickable d-flex ai-center jc-center ${styles.icon}`}>
                <FontAwesomeIcon icon={icon} width={30} height={30} color={color} />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
