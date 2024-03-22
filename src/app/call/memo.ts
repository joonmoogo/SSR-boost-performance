import url from "../config/config";

export const getMemos = async function () {
    const serverData = await fetch(`${url}/api/memo`, { cache: 'no-store' });
    if (!serverData.ok) {
        throw new Error('Network response Error');
    }
    const data: [{ id: string, value: string }] = await serverData.json();
    return data;
}

export const saveMemos = async function (id: string, value: string) {
    const option = {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            id: id,
            value: value
        })
    }
    fetch(`${url}/api/memo`, option).then(async (res) => {
        return res.json().then((result) => {
            console.log(result);

        })
    })
}