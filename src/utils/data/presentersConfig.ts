/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use server';

import { doc } from '../../../services/googleSpreadsheet';

export const presentersConfig = async () => {
  try {
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[1];
    const rows = await sheet.getRows();
    const list = rows.map(
      (
        row,
      ): {
        name: string;
        city: string;
        day: string;
        biography: string;
        img: string;
      } => ({
        name: row.get('presenters_names'),
        city: row.get('presenters_cities'),
        day: row.get('presenters_days'),
        biography: row.get('presenters_biographies'),
        img: row.get('presenters_photos'),
      }),
    );
    return list;
  } catch (error) {
    console.error(error);
    return {
      name: 'Виталий Савченко',
      city: 'Омск',
      day: 'субботы',
      biography:
        'Участник трёх музыкальных проектов и звукорежиссёр, а на радио пришёл, чтобы безнаказанно шалить и реализовывать свои безумные идеи.',
      img: '/images/savchenko',
    };
  }
};
