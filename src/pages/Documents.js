import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lessons from './DocumentCards.js';

const Documents = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [tagSearchTerm, setTagSearchTerm] = useState('');
    const uniqueTags = [...new Set(lessons.flatMap(lesson => lesson.tags))];
    const filteredTags = uniqueTags.filter(tag => tag.toLowerCase().includes(tagSearchTerm.toLowerCase()));

    const filteredLessons = lessons.filter(lesson =>
        (lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) &&
        (selectedTags.length === 0 || selectedTags.every(tag => lesson.tags.includes(tag)))
    );

    const toggleTagSelection = (tag) => {
        setSelectedTags(prevSelectedTags =>
            prevSelectedTags.includes(tag)
            ? prevSelectedTags.filter(t => t !== tag)
            : [...prevSelectedTags, tag]
        );
    };

    return (
        <div>
            <p className="text-3xl font-bold text-center mt-10">Documents & PDFs</p>
            <p className="text-xl font-semibold">{filteredLessons.length} Documents Found</p>
            <div className="flex w-[90vw] md:w-[80vw]">
                <input
                    type="text"
                    placeholder="Search lessons..."
                    className="p-2 mt-2 mr-2 border border-gray-300 rounded-md w-[50vw] md:w-[60vw]"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="relative w-[35vw] md:w-[20vw]">
                    <input
                        type="text"
                        placeholder="Filter tags..."
                        className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                        onFocus={() => setDropdownVisible(true)}
                        onBlur={() => setDropdownVisible(false)}
                        onChange={(e) => setTagSearchTerm(e.target.value)}
                    />
                    <div className="!hidden md:!inline-block fa fa-filter absolute right-5 top-5 text-neutral-400"/>
                    {dropdownVisible && (
                        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto">
                            <div
                                className="p-2 cursor-pointer hover:bg-gray-200 flex items-center"
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    setSelectedTags([]);
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedTags.length === 0}
                                    readOnly
                                    className="mr-2"
                                />
                                Deselect All
                            </div>
                            {filteredTags
                                .sort((a, b) => {
                                    if (a.toLowerCase() === 'other') return 1;
                                    if (b.toLowerCase() === 'other') return -1;
                                    return a.localeCompare(b);
                                })
                                .map((tag, index) => (
                                    <div
                                        key={index}
                                        className="p-2 cursor-pointer hover:bg-gray-200 flex items-center"
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            toggleTagSelection(tag);
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedTags.includes(tag)}
                                            readOnly
                                            className="mr-2"
                                        />
                                        {tag.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>
            {/* Lessons grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5 max-w-full lg:max-w-[80vw] mx-auto">
                {filteredLessons.map((lesson, index) => (
                    <Link to={`/resources/lessons/${lesson.id}`}>
                        <div key={index} className="bg-white p-5 rounded-md shadow-md min-h-[200px] transform transition-all duration-200 hover:scale-103 hover:shadow-lg">
                            <p className="text-sm font-semibold">{lesson.category}</p>
                            <p className="text-xl font-bold">{lesson.title}</p>
                            <p className="text-gray-500">{lesson.description}</p>
                                <p className="bg-red-700 text-white px-4 py-2 rounded-md mt-3 cursor-pointer w-fit">View Lesson</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Documents;
