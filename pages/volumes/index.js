import Link from "next/link";
import { useRouter } from "next/router";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";

export default function Volumes() {
  const router = useRouter();

  function redirectToRandomVolume() {
    /* 
- Math.random(): renturns a rondom number between 0 (incl.) and 1 (excl.)
- volume.length: number of items in the volumes array
- Math.random() * volumes.length:
  multiplies the random number with the number of the items in the array
- rounds a floating-point number down to the nearest whole number.
  So if volumes has 3 items, randomIndex would be a number between 0 and 2 (both inclusive).
*/

    const randomIndex = Math.floor(Math.random() * volumes.length);

    const randomVolumeSlug = volumes[randomIndex].slug;
    router.push(`/volumes/${randomVolumeSlug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <button type="button" onClick={redirectToRandomVolume}>
        Suprise Me!
      </button>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.id}>
              <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
