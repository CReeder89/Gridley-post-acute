import React from 'react';
import { motion } from 'framer-motion';
import type { SvgIconComponent } from '@mui/icons-material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SavingsIcon from '@mui/icons-material/Savings';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const iconMap: Record<string, SvgIconComponent> = {
  LocalHospital: LocalHospitalIcon,
  MenuBook: MenuBookIcon,
  Favorite: FavoriteIcon,
  Savings: SavingsIcon,
  Verified: VerifiedIcon,
  School: SchoolIcon,
  Groups: GroupsIcon,
  Work: WorkIcon,
  Handshake: HandshakeIcon,
  VolunteerActivism: VolunteerActivismIcon,
};

interface WhyChooseGridProps {
  title: string;
  items: readonly { id: string; label: string; icon: string }[];
}

const WhyChooseGrid: React.FC<WhyChooseGridProps> = ({ title, items }) => {
  return (
    <section className="academy-section" aria-labelledby="why-choose-heading">
      <h2 id="why-choose-heading">{title}</h2>
      <ul className="academy-why-grid" role="list">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon] ?? VerifiedIcon;
          return (
            <motion.li
              key={item.id}
              className="academy-why-grid__item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Icon aria-hidden="true" />
              <span>{item.label}</span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default WhyChooseGrid;
