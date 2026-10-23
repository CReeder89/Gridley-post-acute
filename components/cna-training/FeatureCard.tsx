import React from 'react';
import { motion } from 'framer-motion';
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
import type { SvgIconComponent } from '@mui/icons-material';

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

export interface FeatureCardProps {
  icon: keyof typeof iconMap | string;
  title: string;
  description: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index = 0 }) => {
  const Icon = iconMap[icon] ?? LocalHospitalIcon;

  return (
    <motion.article
      className="academy-feature-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: '0 12px 28px rgba(44, 62, 80, 0.18)' }}
    >
      <div className="academy-feature-card__icon" aria-hidden="true">
        <Icon fontSize="large" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
};

export default FeatureCard;
