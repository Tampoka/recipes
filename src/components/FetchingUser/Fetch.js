import { useFetch } from '../../customHooks/useFetch';

function Fetch({
  uri,
  renderSuccess,
  loadingFallback = <p>Loading...</p>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const { loading, data, error } = useFetch(uri);

  if (!uri) return <p>Waiting for userName to load data</p>;
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}

export default Fetch;
