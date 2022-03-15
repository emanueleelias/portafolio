import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'qaud9311',
    dataset: 'production',
    apiVersion: '2022-03-11',
    useCdn: true,
    token: 'skvjFcWJuurZRP3pSeZ2jAA4nL0w4oWt1FutZtis8MpJNPBTwkqKBnmPbuPEd2CONvDlmiyul7A0axMrmKVElgsLE9VdWCC6Rn0FR7cBQ64Z8H7gXt5n1r7M6w0uefSkCSsIMSux724XbyyPQFnw2U9Af9fmtH29nUQ2eTXtx7O46Mz8suw6',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);