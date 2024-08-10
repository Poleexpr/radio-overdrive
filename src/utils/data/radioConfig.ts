/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use server';

import { doc } from '../../../services/googleSpreadsheet';

export const radioConfig = async () => {
  try {
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    const list = rows.map(
      (
        row,
      ): {
        name: string;
        presenter: string;
        audio: string;
        date: string;
        tracklist: string[];
      } => ({
        name: row.get('radio_name'),
        presenter: row.get('radio_presenter'),
        date: row.get('radio_date'),
        audio: row.get('radio_audio'),
        tracklist: row.get('radio_tracklist').split(';'),
      }),
    );
    return list[0];
  } catch (error) {
    console.error(error);
    return {
      name: 'Over',
      presenter: 'Oxbow',
      date: '8 мая 1996 ночь',
      audio: './audios/oxbow-over.mp3',
      tracklist: [
        'Oxbow — Over',
        'Oxbow — Over',
        'Oxbow — Over',
        'Oxbow — Over',
        'Oxbow — Over',
        'Oxbow — Over',
        'Oxbow — Over',
      ],
    };
  }
};
