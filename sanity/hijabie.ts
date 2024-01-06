// sanity/hijabie.ts

import CustomBlock from "@/app/components/customblock";
import { defineArrayMember, defineField, defineType } from "sanity";

export const hijabie = defineType(
    {
        name: 'hijabie',
        type: 'document',
        title: 'Hijabie',
        fields: [
            defineField(
                {
                    name: 'name',
                    type: 'string',
                    title: 'Name',
                }),
            defineField(
                {
                    name: "launchdate",
                    title: 'Launch At',
                    type: "datetime",
                    hidden: ({ document }: any) => document.name === "chuzzi"
                }),
            {
                name: "content",
                title: 'Content',
                type: 'array',
                of: [
                    {
                        type: 'block',
                    },
                    {
                        type: 'image',
                        fields: [
                            {
                                type: 'text',
                                name: 'alt',
                                title: 'Alternative Text',
                                description: 'This is hijabie alternative text',
                                options: {
                                    isHighlighted: true
                                }
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Poster',
                name: 'posterimage',
                type: 'image',
                options: {
                    hotspot: true // <-- Defaults to false
                },
                fields: [
                    defineField(
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        }),
                    defineField(
                        {
                            name: 'attribution',
                            type: 'string',
                            title: 'Attribution',
                        })
                ]
            },
            defineField(
                {
                    name: 'gender',
                    type: 'string',
                    title: 'Gender',
                    options: {
                        list: [
                            { title: 'Male', value: 'male' },
                            { title: 'FeMale', value: 'female' },
                            { title: 'Transgender', value: 'transgender' }
                        ],
                        layout: 'dropdown'
                    }
                }),
            {
                type: 'object',
                name: 'labels',
                title: 'Edited!',
                fields: [
                    {
                        type: 'string',
                        name: 'quotes',
                        title: 'Quotes',
                    },
                    {
                        type: 'string',
                        name: 'value',
                        title: 'Value-Quote',
                    },
                    {
                        type: 'url',
                        name: 'urlmedia',
                        title: 'Url-Quote',
                        hidden: ({ document }: any) => {
                            // Perform a safety check before accessing 'value'
                            if (document.labels && document.labels.value) {
                                return false; // Show the field
                            }
                            return true; // Hide the field
                        },
                    },

                ],
            },
            {
                name: 'tags',
                type: 'array',
                title: 'Tags',
                of: [
                    { type: 'string' }
                ],
                options: {
                    layout: 'tags'
                }
            },
            {
                name: 'courses',
                type: 'array',
                title: 'Courses',
                of: [{ type: 'string' }],
                options: {
                    list: [
                        { title: 'Javascript', value: 'js' },
                        { title: 'Typecript', value: 'ts' }
                    ]
                }
            },
            {
                name: 'customized',
                title: 'Customized block type',
                type: 'array',
                of: [
                    {
                        type: 'block',
                        // Only allow these block styles
                        styles: [
                            { title: 'Normal', value: 'normal' },
                            { title: 'H1', value: 'h1' },
                            { title: 'H2', value: 'h2' },
                            { title: 'CustomBlock', value: 'CustomBlock' }
                        ],
                        // Only allow numbered lists
                        lists: [
                            { title: 'Numbered', value: 'number' }
                        ],
                        marks: {
                            // Only allow these decorators
                            decorators: [
                                { title: 'Strong', value: 'strong' },
                                { title: 'Emphasis', value: 'em' }
                            ],
                            // Support annotating text with a reference to an author
                            // annotations: [
                            //     { name: 'author', title: 'Author', type: 'reference', to: { type: 'author' } }
                            // ]
                        }
                    }
                ]
            },
        ]
    }
)