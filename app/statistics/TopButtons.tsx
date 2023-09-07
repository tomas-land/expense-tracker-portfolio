'use client';

import Link from 'next/link';
import s from '@styles/Components/_TopButtons.module.scss';
import { useRouter } from 'next/navigation';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useGlobalContext } from '@context/context';

const TopButtons = () => {
  const { toggleStatsDropdown } = useGlobalContext();
  const router = useRouter();
  return (
    <div className={s.top_btns}>
      <Link href={'/'} className={`${s.back_btn} ${s.btn}`}>
        <MdOutlineKeyboardArrowLeft />
      </Link>
      <button type="button" className={s.btn} onClick={toggleStatsDropdown}>
        <HiOutlineDotsVertical />
      </button>
    </div>
  );
};

export default TopButtons;
