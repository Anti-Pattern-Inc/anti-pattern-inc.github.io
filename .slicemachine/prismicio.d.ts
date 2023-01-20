// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for legal policy documents */
interface LegalPolicyDocumentData {
    /**
     * Slice Zone field in *legal policy*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: legal_policy.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<LegalPolicyDocumentDataSlicesSlice>;
}
/**
 * Slice for *legal policy → Slice Zone*
 *
 */
type LegalPolicyDocumentDataSlicesSlice = ParagraphSlice;
/**
 * legal policy document from Prismic
 *
 * - **API ID**: `legal_policy`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LegalPolicyDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<LegalPolicyDocumentData>, "legal_policy", Lang>;
/** Content for news documents */
interface NewsDocumentData {
    /**
     * title field in *news*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: news.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * publication date field in *news*
     *
     * - **Field Type**: Timestamp
     * - **Placeholder**: *None*
     * - **API ID Path**: news.publication_date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
     *
     */
    publication_date: prismicT.TimestampField;
    /**
     * hero image field in *news*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: news.hero_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    hero_image: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *news*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: news.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<NewsDocumentDataSlicesSlice>;
}
/**
 * Slice for *news → Slice Zone*
 *
 */
type NewsDocumentDataSlicesSlice = ParagraphSlice;
/**
 * news document from Prismic
 *
 * - **API ID**: `news`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NewsDocumentData>, "news", Lang>;
export type AllDocumentTypes = LegalPolicyDocument | NewsDocument;
/**
 * Item in Paragraph → Items
 *
 */
export interface ParagraphSliceDefaultItem {
    /**
     * content field in *Paragraph → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: paragraph.items[].content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Default variation for Paragraph Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Paragraph`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<ParagraphSliceDefaultItem>>;
/**
 * Slice variation for *Paragraph*
 *
 */
type ParagraphSliceVariation = ParagraphSliceDefault;
/**
 * Paragraph Shared Slice
 *
 * - **API ID**: `paragraph`
 * - **Description**: `Paragraph`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSlice = prismicT.SharedSlice<"paragraph", ParagraphSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { LegalPolicyDocumentData, LegalPolicyDocumentDataSlicesSlice, LegalPolicyDocument, NewsDocumentData, NewsDocumentDataSlicesSlice, NewsDocument, AllDocumentTypes, ParagraphSliceDefaultItem, ParagraphSliceDefault, ParagraphSliceVariation, ParagraphSlice };
    }
}
