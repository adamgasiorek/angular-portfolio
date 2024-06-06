import {
  and,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { capitalize } from './capitalize';

export const getPicturesForPage = (
  firestore: any,
  filterCountry: any,
  filterTags: any
): any => {
  return collectionData(
    query(
      collection(firestore, 'pictures'),
      and(
        filterCountry
          ? where('country', '==', capitalize(filterCountry))
          : where('image', '>', 'h'),
        filterTags.length > 0
          ? where(
              'tags',
              'array-contains',
              filterTags.length > 0 ? filterTags[0] : ''
            )
          : where('image', '>', 'h')
      )
    ),
    { idField: 'imageId' }
  );
};
