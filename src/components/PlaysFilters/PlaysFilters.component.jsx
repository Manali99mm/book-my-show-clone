import { Disclosure } from '@headlessui/react'
import { FiChevronUp, FiChevronDown } from "react-icons/fi"

const PlaysFilters = (props) => {
    return (
        <Disclosure>
            {
                ({ open }) => (
                    <div className="shadow-lg py-2 px-2">
                        <Disclosure.Button className="py-2 flex items-center gap-3">
                            {open ? <FiChevronUp /> : <FiChevronDown />}
                            <span className={open ? "text-red-600" : "text-gray-700"}>{props.title}</span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 px-2">
                            <div className="flex flex-wrap items-center gap-3">
                                {props.tags.map((tag) => (
                                    <>
                                        <div className="border-2 border-gray-200 px-3 py-1">
                                            <span className="text-red-600">{tag}</span>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </div>
                )
            }
        </Disclosure>
    )
}

export default PlaysFilters;