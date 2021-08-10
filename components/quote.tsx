import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/rootStore';

export const Quote = observer(() => {
  const { quoteStore } = useStore();

  async function getRandomQuote() {
    await quoteStore.get();
  }

  return (
    <div className="">
      <blockquote className="bg-gray-100 p-6 rounded shadow h-64">
        {quoteBody(
          quoteStore.body,
          quoteStore.author,
          quoteStore.season,
          quoteStore.episode,
          quoteStore.fetching
        )}
      </blockquote>
      <button
        className="mt-4 px-3 py-2 text-white bg-indigo-600 rounded shadow"
        onClick={getRandomQuote}
      >
        Get a Random Quote
      </button>
    </div>
  );
});

function quoteBody(
  quote: string,
  author: string,
  season: string,
  episode: string,
  fetching: boolean
) {
  if (quote === '') {
    return <p>Get a quote!</p>;
  }
  return (
    <>
      {fetching ? (
        <div className="animate-pulse">
          <div className="h-6 mb-2 bg-indigo-100"></div>
          <div className="h-4 mb-2 bg-indigo-100"></div>
          <div className="h-4 mb-2 bg-indigo-100"></div>
          <div className="h-4 mb-2 bg-indigo-100"></div>
        </div>
      ) : (
        <>
          <span className="text-2xl">&#8220;</span>
          <span className="italic">{quote}</span>
          <span className="text-2xl">&#8221;</span>
          <p className="mt-2">
            <span className="font-bold">Author:</span> {author}
          </p>
          <p>
            <span className="font-bold">Season:</span> {season}
          </p>
          <p>
            <span className="font-bold">Episode:</span> {episode}
          </p>
        </>
      )}
    </>
  );
}
