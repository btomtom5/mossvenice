defmodule Moss.Repo do
  use Ecto.Repo,
    otp_app: :moss,
    adapter: Ecto.Adapters.Postgres
end
