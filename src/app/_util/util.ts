export function timeTune(time: string) {
    const givenDate: any = new Date(time);
    const currentDate: any = new Date();
    const differenceMs = currentDate - givenDate;
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    const differenceHours = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let result;
    if (differenceDays === 0) {
        if (differenceHours === 0) {
          const differenceMinutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
          result = `${differenceMinutes}분 전`;
        } else {
          result = `${differenceHours}h`;
        }
      } else if (differenceDays < 7) {
        result = `${differenceDays}d`;
      } else {
        const differenceWeeks = Math.floor(differenceDays / 7);
        result = `${differenceWeeks}w`;
      }
    return result;
}