export default function WorkspaceProjectPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Workspace: Project {params.id}</h1>
      <p className="text-muted-foreground mt-4">Coming soon...</p>
    </div>
  );
}
