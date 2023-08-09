import React, { Fragment } from 'react'

export default function Breadcrumb({ data = [] }) {
    return (
        <div class="pt-12">
            <div dir="ltr">
                <div class="ps-20">
                    <div class="flex space-x-3 my-auto">
                        <div className="text-black text-sm font-medium uppercase">Нүүр</div>
                        {data.map((item, index) => (
                            <Fragment key={index}>
                                <div className="text-black text-sm font-medium uppercase">/</div>
                                <div className="text-black text-sm font-medium uppercase">{item.title}</div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
