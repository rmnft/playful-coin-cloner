
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

interface TokenBasicInfoProps {
  data: {
    name: string;
    symbol: string;
    logoUrl: string;
  };
  onComplete: (data: {
    name: string;
    symbol: string;
    logoUrl: string;
  }) => void;
}

export const TokenBasicInfo: React.FC<TokenBasicInfoProps> = ({ data, onComplete }) => {
  const [name, setName] = React.useState(data.name);
  const [symbol, setSymbol] = React.useState(data.symbol);
  const [logoUrl, setLogoUrl] = React.useState(data.logoUrl);
  const [previewUrl, setPreviewUrl] = React.useState('');

  const handleLogoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
      // TODO: Implement actual file upload logic
      setLogoUrl(preview);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({ name, symbol, logoUrl });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Token Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Bitcoin"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="symbol">Token Symbol</Label>
        <Input
          id="symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="e.g. BTC"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="logo">Token Logo</Label>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label
              htmlFor="logo"
              className="flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Token logo preview"
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center space-y-2">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <div className="text-sm text-gray-600">Click to upload logo</div>
                </div>
              )}
              <input
                id="logo"
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Next Step
      </Button>
    </form>
  );
};
