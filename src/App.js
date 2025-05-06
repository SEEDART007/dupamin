import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const faceEmojis = [
    '😂', '😊', '😍', '🤣', '😭', '🥰', 
    '😘', '😎', '😏', '🤔', '😒', '😢',
    '🤯', '🥺', '😳'
];

const nonFaceEmojis = [
    '🔥', '✨', '💀', '🫶', '👀', '🙌',
    '🖤', '💯', '🤡', '🍿', '💔', '🫡',
    '🤞', '👑', '⚡'
];

const RandomEmoji = ({ 
    face = true,
    nonFace = true,
    emojis = [],
    interval = 1000,
    fontSize = '48px',
    className = ''
}) => {
    // Memoize the emoji list based on props
    const finalEmojis = React.useMemo(() => {
        if (emojis.length > 0) return emojis;
        return [
            ...(face ? faceEmojis : []),
            ...(nonFace ? nonFaceEmojis : [])
        ];
    }, [face, nonFace, emojis]); // Rebuild when these change

    const [currentEmoji, setCurrentEmoji] = useState(finalEmojis[0] || '❓');

    useEffect(() => {
        // Skip if no emojis available
        if (finalEmojis.length === 0) return;

        const intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * finalEmojis.length);
            setCurrentEmoji(finalEmojis[randomIndex]);
        }, interval);

        return () => clearInterval(intervalId);
    }, [finalEmojis, interval]); // Re-set interval when emojis change

    return (
        <span 
            className={`random-emoji ${className}`}
            style={{ fontSize }}
            role="img"
            aria-label="Random emoji"
        >
            {finalEmojis.length > 0 ? currentEmoji : 'No emojis selected'}
        </span>
    );
};

RandomEmoji.propTypes = {
    face: PropTypes.bool,
    nonFace: PropTypes.bool,
    emojis: PropTypes.arrayOf(PropTypes.string),
    interval: PropTypes.number,
    fontSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    className: PropTypes.string
};

export default RandomEmoji;