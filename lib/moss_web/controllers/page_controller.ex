defmodule MossWeb.PageController do
  use MossWeb, :controller

  def home(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.
    render(conn, :home, layout: false)
  end

  def scratch(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.
    render(conn, :scratch, layout: false)
  end
end
