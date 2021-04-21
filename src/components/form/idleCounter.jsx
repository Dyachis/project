
export default function idleCounter(e,count) {
    count = Counter(e,count);
    return count;   
}

function Counter(e,count) {
    if (parseInt(e.target.id) % 2 === 0) {
        count++;
        e.target.id = parseInt(e.target.id) - 1;
        return count;
    } else if (parseInt(e.target.id) % 2 === 1) {
        count--;
        e.target.id = parseInt(e.target.id) + 1;
        return count;
    }
}