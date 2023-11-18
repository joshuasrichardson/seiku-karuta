const s3BucketUrl = "https://seiku-karuta.s3.us-west-1.amazonaws.com";

export const introScriptures = [
  "/Alma_37_34.m4a",
  "/Alma_37_36.m4a",
  "/John_3_16.m4a",
  "/1_Nephi_1_5.m4a",
  "/1_Nephi_1_30.m4a",
  "/Alma_36_19.m4a",
].map((scripture) => `${s3BucketUrl}/intro${scripture}`);

export enum StandardWork {
  OLD_TESTAMENT = "OLD_TESTAMENT",
  NEW_TESTAMENT = "NEW_TESTAMENT",
  BOOK_OF_MORMON = "BOOK_OF_MORMON",
  DOCTRINE_AND_COVENANTS = "DOCTRINE_AND_COVENANTS",
}

export const masteryScriptures = {
  [StandardWork.OLD_TESTAMENT]: [
    "/1_Samuel_16_7.m4a",
    "/Abraham_3_22-23.m4a",
    "/Amos_3_7.m4a",
    "/Exodus_19_5-6.m4a",
    "/Exodus_20_3-17.m4a",
    "/Ezekiel_37_15-17.m4a",
    "/Genesis_1_26-27.m4a",
    "/Genesis_2_24.m4a",
    "/Genesis_39_9.m4a",
    "/Isaiah_1_18.m4a",
    "/Isaiah_5_20.m4a",
    "/Isaiah_29_13-14.m4a",
    "/Isaiah_53_3-5.m4a",
    "/Isaiah_58_6-7.m4a",
    "/Isaiah_58_13-14.m4a",
    "/Jeremiah_1_4-5.m4a",
    "/Joshua_24_15.m4a",
    "/Malachi_3_8-10.m4a",
    "/Malachi_4_5-6.m4a",
    "/Moses_1_39.m4a",
    "/Moses_7_18.m4a",
    "/Proverbs_3_5-6.m4a",
    "/Psalm_24_3-4.m4a",
    "/Psalm_119_105.m4a",
    "/Psalm_127_3.m4a",
  ].map((scripture) => `${s3BucketUrl}/oldtestament${scripture}`),
  [StandardWork.NEW_TESTAMENT]: [
    "/Matthew_5_14-16.m4a",
    "/Matthew_11_28-30.m4a",
    "/Matthew_16_15-19.m4a",
    "/Matthew_22_36-39.m4a",
    "/Matthew_28_19-20.m4a",
    "/1_Peter_4_6.m4a",
    "/James_2_17-18.m4a",
    "/Revelation_20_12.m4a",
    "/1_Corinthians_15_20-22.m4a",
    "/1_Corinthians_15_40-42.m4a",
    "/2_Thessalonians_2_1-3.m4a",
    "/2_Timothy_3_15-17.m4a",
    "/Ephesians_4_11-14.m4a",
    "/Galatians_5_22-23.m4a",
    "/Hebrews_12_9.m4a",
    "/James_1_5-6.m4a",
    "/Philippians_4_13.m4a",
    "/1_Corinthians_6_19-20.m4a",
    "/Acts_2_36-38.m4a",
    "/Acts_3_19-21.m4a",
    "/John_3_5.m4a",
    "/John_14_6.m4a",
    "/John_14_15.m4a",
    "/John_17_3.m4a",
    "/Luke_24_36-39.m4a",
  ].map((scripture) => `${s3BucketUrl}/newtestament${scripture}`),
  [StandardWork.BOOK_OF_MORMON]: ["4", "5"].map(
    (scripture) => `${s3BucketUrl}/bookofmormon${scripture}`
  ),
  [StandardWork.DOCTRINE_AND_COVENANTS]: [].map(
    (scripture) => `${s3BucketUrl}/doctrineandcovenants${scripture}`
  ),
};

export const otherScriptures = [].map(
  (scripture) => `${s3BucketUrl}/other${scripture}`
);
