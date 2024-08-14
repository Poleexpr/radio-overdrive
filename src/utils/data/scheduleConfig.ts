/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use server';

import { doc } from '../../../services/googleSpreadsheet';

export const scheduleConfig = async () => {
  try {
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[2];
    const rows = await sheet.getRows();
    const list = rows.map(
      (
        row,
      ): {
        day: string;
        schedule: {
          time: string;
          event: string;
        }[];
      } => ({
        day: row.get('schedule_day'),
        schedule: row
          .get('schedule_schedule')
          .split(';')
          .map((item: string) => ({
            time: item.split('|')[0].trim(),
            event: item.split('|')[1].trim(),
          })),
      }),
    );
    return list;
  } catch (error) {
    console.error(error);
    return [
      {
        day: 'понедельник',
        schedule: [
          {
            time: '17:00',
            event: 'Вечерний эфир Виталия Савченко',
          },
          {
            time: '22:00',
            event: 'Ночной эфир Виталия Савченко',
          },
        ],
      },
      {
        day: 'среда',
        schedule: [
          {
            time: '17:00',
            event: 'Вечерний эфир Виталия Савченко',
          },
          {
            time: '22:00',
            event: 'Ночной эфир Виталия Савченко',
          },
        ],
      },
      {
        day: 'суббота',
        schedule: [
          {
            time: '17:00',
            event: 'Вечерний эфир Виталия Савченко',
          },
          {
            time: '22:00',
            event: 'Ночной эфир Виталия Савченко',
          },
        ],
      },
    ];
  }
};
