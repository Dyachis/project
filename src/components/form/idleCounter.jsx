
export default function idleCounter(e,count) {
    count = Counter(e,count);
    return count;   
}

function Counter(e,count) {
    if (parseInt(e.target.min) % 2 === 0) {
        count++;
        e.target.min = parseInt(e.target.min) - 1;
        return count;
    } else if (parseInt(e.target.min) % 2 === 1) {
        count--;
        e.target.min = parseInt(e.target.min) + 1;
        return count;
    }
}